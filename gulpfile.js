const fs = require('fs');
const path = require('path');
const lodash = require('lodash');
const gulp = require('gulp');
const gulpSvgMin = require('gulp-svgmin');
const gulpCheerio = require('gulp-cheerio');
const gulpRename = require('gulp-rename');
const gulpJsonFormat = require('gulp-json-format');
const gulpJsonEditor = require('gulp-json-editor');
const gulpJsonMin = require('gulp-jsonmin');

gulp.task('icons', () => {
    const sources = [
        './src/svgs/*.svg'
    ];

    const icons = [];

    return gulp.src(sources)
        .pipe(gulpSvgMin({
            plugins: [
                {
                    cleanupIDs: {
                        remove: false,
                        minify: true,
                        mergeable: false
                    },
                },
            ]
        }))
        .pipe(gulpCheerio({
            run: function ($) {
                $('path').each(function () {
                    const tags = $('svg').attr('id') || $('g').attr('id');

                    const name = $(this).attr('id');
                    const data = $(this).attr('d');

                    icons.push({
                        name,
                        tags: [
                            name,
                            tags
                        ],
                        data,
                    });
                });
            },

            parserOptions: {
                xmlMode: true,
            },
        }))
        .on('end', () => {
            const filePath = 'matericons.json';

            const iconNameMap = {};
            const outputIcons = [];

            icons.forEach(icon => {
                let name = icon.name;

                if (name in iconNameMap) {
                    // If the name exists, append an index number as a suffix
                    const index = iconNameMap[name] + 1;
                    name = name.replace(/_/g, '-') + '-' + index;
                    iconNameMap[icon.name] = index;
                } else {
                    // If the name doesn't exist, add it to the iconNameMap with an index of 1
                    iconNameMap[name] = 1;
                    name = name.replace(/_/g, '-').replace(/ /g, '-');
                }

                outputIcons.push({
                    ...icon,
                    name: name
                });
            });

            // Sort the outputIcons array by name alphabetically
            outputIcons.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });

            const json = JSON.stringify(outputIcons, null, 2);
            return gulp.src('package.json')
                .pipe(gulpJsonFormat(2))
                .pipe(gulpRename(filePath))
                .pipe(gulp.dest('./dist'))
                .on('end', () => {
                    fs.writeFileSync(path.join(__dirname, 'dist', filePath), json);
                });
        });
});

gulp.task('icon-tags', () => {
    const source = './dist/matericons.json';

    const icons = JSON.parse(fs.readFileSync(source));
    const tags = JSON.parse(fs.readFileSync('./src/icon-tags.json'));

    const updatedIcons = icons.map((icon) => {
        const matchedTag = lodash.find(tags, {
            name: icon.name
        });

        if (matchedTag) {
            icon.tags = lodash.uniq([
                ...icon.tags,
                ...matchedTag.tags
            ]);
        }

        return icon;
    });

    return gulp.src(source)
        .pipe(gulpJsonEditor(function (json) {
            return updatedIcons;
        }))
        .pipe(gulpJsonMin())
        .pipe(gulp.dest('./dist'));
});