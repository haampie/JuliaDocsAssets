module.exports = {
    sourceMaps: false,
    optimize: true,
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
        babel: {
            presets: ['env']
        },
        sass: {
            options: {
                includePaths: [
                    'node_modules/bootstrap/scss',
                    'node_modules/katex/dist',
                    'node_modules/highlight.js/styles'
                ]
            }
        },
        copycat: {
            fonts: ["node_modules/katex/dist/fonts"],
            verbose: false,
            onlyChanged: true
        }
    }
}
