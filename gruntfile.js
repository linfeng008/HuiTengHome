module.exports = function (grunt) {

    grunt.initConfig({
        /*   pkg: grunt.file.readJSON('package.json'),*/
        watch: {
            js: {
                files: ['public/js*.js', 'app/models.js', 'app/schemas.js', 'app/controllers.js', 'app/routes.js'],
                //tasks: ['jshint'],
                options: {
                    livereload: true  //文件有改动时重启服务
                }
            },
            uglify: {
                files: ['public/js/*.js'],
                // tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['public/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 3
                },
                files: {
                    'public/css/index.css': 'public/less/index.less',
                    'public/css/mobile.css': 'public/less/mobile.less',
                    'public/css/activety.css': 'public/less/activety.less'
                }
            }
        },
        uglify: {
            dev: { //在开发环境下压缩
                files: {
                    'public/javascripts/mobile.min.js': 'public/js/mobile.js',
                    'public/javascripts/product2.min.js': 'public/js/product2.js',
                    'public/javascripts/plugKingEdit.min.js': 'public/js/plugKingEdit.js',
                    'public/javascripts/product.min.js': 'public/js/product.js',
                    'public/javascripts/MyAnimate.min.js': 'public/js/MyAnimate.js'
                    /*
                     'app/controllers/aboutC.min.js': 'app/controllers/aboutC.js',
                     'app/controllers/adminC.min.js': 'app/controllers/adminC.js',
                     'app/controllers/exampleC.min.js': 'app/controllers/exampleC.js',
                     'app/controllers/experienceC.min.js': 'app/controllers/experienceC.js',
                     'app/controllers/indexC.min.js': 'app/controllers/indexC.js',
                     'app/controllers/joinUsC.min.js': 'app/controllers/joinUsC.js',
                     'app/controllers/uploadC.min.js': 'app/controllers/uploadC.js'*/
                }
            }
        },
        nodemon: {
            dev: {
                options: {
                    file: 'app.js', //当前入口文件
                    args: [],
                    ignoredFiles: ['README.md', 'node_modules/**'],  //非监听项目
                    watchedExtensions: ['js'],
                    watchedFolders: ['./'],
                    debug: true,
                    delayTime: 1, //如果大批量文件要改动 不会子啊文件上监听改动，会在一定时间（毫秒）内编译或重启
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch', 'less', 'uglify'],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    //加载依赖插件
    grunt.loadNpmTasks('grunt-contrib-watch');  //重启
    grunt.loadNpmTasks('grunt-nodemon');        //检测app.js
    grunt.loadNpmTasks('grunt-concurrent');     //编译less sass 忙任务
    grunt.loadNpmTasks('grunt-mocha-test');     //测试工具
    grunt.loadNpmTasks('grunt-contrib-less');   //less编译
    grunt.loadNpmTasks('grunt-contrib-uglify'); //js压缩
    //grunt.loadNpmTasks('grunt-contrib-jshint'); //检测代码格式

    grunt.option('force', true);// 不会因为报错而停止服务

    grunt.registerTask('default', ['concurrent']); //注册 ‘concurrent’ 任务

}
/*当你没有知识体系的时候，只能够靠试错前进*/