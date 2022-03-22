C:\Users\s8692c\Project\TOH>npm init wdio .
npx: installed 17 in 2.385s

                 -:...........................-:.
                 +                              +
              `` +      `...`        `...`      + `
            ./+/ +    .:://:::`    `::///::`  ` + ++/.
           .+oo+ +    /:+ooo+-/    /-+ooo+-/ ./ + +oo+.
           -ooo+ +    /-+ooo+-/    /-+ooo+-/ .: + +ooo.
            -+o+ +    `::///:-`    `::///::`    + +o+-
             ``. /.     `````        `````     .: .``
                  .----------------------------.
           `-::::::::::::::::::::::::::::::::::::::::-`
          .+oooo/:------------------------------:/oooo+.
      `.--/oooo-                                  :oooo/--.`
    .::-``:oooo`                                  .oooo-``-::.
  ./-`    -oooo`--.: :.--                         .oooo-    `-/.
 -/`    `-/oooo////////////////////////////////////oooo/.`    `/-
`+`   `/+oooooooooooooooooooooooooooooooooooooooooooooooo+:`   .+`
-/    +o/.:oooooooooooooooooooooooooooooooooooooooooooo:-/o/    +.
-/   .o+  -oooosoooososssssooooo------------------:oooo- `oo`   +.
-/   .o+  -oooodooohyyssosshoooo`                 .oooo-  oo.   +.
-/   .o+  -oooodooysdooooooyyooo` `.--.``     .:::-oooo-  oo.   +.
-/   .o+  -oooodoyyodsoooooyyooo.//-..-:/:.`.//.`./oooo-  oo.   +.
-/   .o+  -oooohsyoooyysssysoooo+-`     `-:::.    .oooo-  oo.   +.
-/   .o+  -ooooosooooooosooooooo+//////////////////oooo-  oo.   +.
-/   .o+  -oooooooooooooooooooooooooooooooooooooooooooo-  oo.   +.
-/   .o+  -oooooooooooooooooooooooooooooooooooooooooooo-  oo.   +.
-+////o+` -oooo---:///:----://::------------------:oooo- `oo////+-
+ooooooo/`-oooo``:-```.:`.:.`.+/-    .::::::::::` .oooo-`+ooooooo+
oooooooo+`-oooo`-- `/` .:+  -/-`/`   .::::::::::  .oooo-.+oooooooo
+-/+://-/ -oooo-`:`.o-`:.:-````.:    .///:``````  -oooo-`/-//:+:-+
: :..--:-:.+ooo+/://o+/-.-:////:-....-::::-....--/+ooo+.:.:--.-- /
- /./`-:-` .:///+/ooooo/+///////////////+++ooooo/+///:. .-:.`+./ :
:-:/.           :`ooooo`/`              .:.ooooo :           ./---
                :`ooooo`/`              .:.ooooo :
                :`ooooo./`              .:-ooooo :
                :`ooooo./`              .:-ooooo :
            `...:-+++++:/.              ./:+++++-:...`
           :-.````````/../              /.-:````````.:-
          -/::::::::://:/+             `+/:+::::::::::+.
          :oooooooooooo++/              +++oooooooooooo-

                           Webdriver.IO
              Next-gen browser and mobile automation
                    test framework for Node.js


Creating WebdriverIO project in C:\Users\s8692c\Project\TOH

Installing packages:  @wdio/cli

+ @wdio/cli@7.18.1
added 192 packages from 286 contributors in 27.214s

109 packages are looking for funding
  run `npm fund` for details


Finished installing packages.

Running WDIO CLI Wizard...

=========================
WDIO Configuration Helper
=========================

? Where is your automation backend located? On my local machine
? Which framework do you want to use? jasmine
? Do you want to use a compiler? TypeScript (https://www.typescriptlang.org/)
? Where are your test specs located? ./e2e/specs/**/*.ts
? Do you want WebdriverIO to autogenerate some test files? Yes
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Where are your page objects located? ./e2e/pageobjects/**/*.ts
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup? wait-for
? Do you want to add a service to your test setup? chromedriver
? What is the base url? http://localhost
? Do you want me to run `npm install` (Y/n)




Config file installed successfully, creating test files...
To have TypeScript support please add the following packages to your "types" list:
{
  "compilerOptions": {
    "types": ["node", "webdriverio/async", "@wdio/jasmine-framework", "expect-webdriverio"]
  }
}


Flytta följande filer till e2e:
tsconfig.json
wdio.conf.ts


Editera wdio.conf.ts

Ladda ned rätt chromedriver
Skapa katalogen webdrivers och lägg chromdrivern där och döp om

Ändra services i wdio.conf.ts
services: [
        ['chromedriver',
            {            
                chromedriverCustomPath: currentChromeDriver()
            }
        ]
    ]
