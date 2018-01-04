module.exports = {
    files: {
        javascripts: {
            joinTo: 'app.js'
        },
        stylesheets: {
            joinTo: 'style.css'
        }
    },
    paths: {
      public: 'docs',
      watched: ['src']
    },
    plugins: {
        sass: {
            options: {
                includePaths: ['node_modules/bootstrap/scss']
            }
        },
        uglify: {
            mangle: false,
            compress: {
                global_defs: {
                    DEBUG: false
                }
            }
        }
    },
    overrides: {
        production: {
            optimize: true,
            sourceMaps: false,
            plugins: { autoReload: { enabled: false } }
        }
    }
}
