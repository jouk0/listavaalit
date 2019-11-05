module.exports = {
    "src_folders" : ["nightwatch/sites"],
    "output_folder" : "reports",
    "custom_commands_path" : "",
    "custom_assertions_path" : "",
    "page_objects_path" : "",
    "globals_path" : "",
    "parallel_process_delay" : 3500,  
  
    "selenium" : {
      "start_process" : true,
      "server_path" : "./node_modules/selenium-standalone/.selenium/selenium-server/3.141.5-server.jar",
      "log_path" : "",
      "port" : 4444,
      "cli_args" : {
        "webdriver.chrome.driver" : "./node_modules/selenium-standalone/.selenium/chromedriver/2.43-x64-chromedriver"
      }
    },
  
    "test_settings" : {
      "default" : {
        "launch_url" : "http://localhost",
        "selenium_port"  : 4444,
        "selenium_host"  : "localhost",
        "silent": true,
        "screenshots" : {
          "enabled" : true,
          "path" : "./screenshots"
        },
        "desiredCapabilities": {
          "browserName" : "chrome",
          "javascriptEnabled" : true,
          "acceptSslCerts" : true,
          "chromeOptions" : {
            "prefs" : {
              "credentials_enable_service" : false,
              "profile.password_manager_enabled" : false
            },
            "args": [
              "use-gpu-in-tests"
            ]
            /*,
            "args": [
              "headless",
              "disable-web-security",
              "ignore-certificate-errors"
            ]*/
          }
          /*
          "browserName" : "phantomjs",
          "javascriptEnabled" : true,
          "acceptSslCerts" : true,
          "phantomjs.binary.path" : "./node_modules/phantomjs/bin/phantomjs",
          "phantomjs.cli.args" : []
          */
        }
      },
      "chrome": {
        "desiredCapabilities": {
          "browserName" : "chrome",
          "javascriptEnabled" : true,
          "acceptSslCerts" : true,
          "chromeOptions" : {
            "prefs" : {
              "credentials_enable_service" : false,
              "profile.password_manager_enabled" : false
            },
            "args": [
              "use-gpu-in-tests"
            ]
            /*,
            "args": [
              "headless",
              "disable-web-security",
              "ignore-certificate-errors"
            ]*/
          }
        }
      },
      
      /*
      "phantomjs" : {
        "desiredCapabilities": {
          "browserName" : "phantomjs",
          "javascriptEnabled" : true,
          "acceptSslCerts" : true,
          "phantomjs.binary.path" : "./node_modules/phantomjs/bin/phantomjs",
          "phantomjs.cli.args" : []
        }
      }
      */
    },
    "test_workers": {
      "enabled": true,
      "workers": 29
      // number of cpu cores
      //"workers": "auto"
    }
  }