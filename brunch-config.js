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
        sass: {
            options: {
                includePaths: ['node_modules/bootstrap/scss', 'node_modules/katex/dist']
            }
        },
        copycat: {
            fonts: ["node_modules/katex/dist/fonts"],
            verbose: false,
            onlyChanged: true
        }
    }
}
