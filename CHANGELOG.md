# 3.0.0

* Fork (https://github.com/wwwtyro/dis-gui) to create this repo
* Update to Babel 7 and configured with `preset-env` and `preset-react`
* Update to React 18
* Add `install-peers-cli` package and `npm run prepare` script

# 2.1.0

* Add alwaysOpen option to Gui wrapper (https://github.com/wwwtyro/dis-gui/pull/7)

# 2.0.12

* Fix scope binding issues by using arrow syntax

# 2.0.11

* Make `dg.Select` controlled

# 2.0.10

* Add /lib to version control
* Add /src to published module

# 2.0.9

* Support top-level className prop

# 2.0.8

* Use `prop-types` instead of deprecated `React.PropTypes`

# 2.0.7

* Folders provide subscription function via context, children may register for updates on expand/collapse
* Fix initial layout issue of `number-range` nested in folder via subscription

# 2.0.6

* Defer initial layouting after mount `number-range` (workaround for invalid initial thumb position before first update)

# 2.0.5

* Use PureComponent

# 2.0.4

* Implement missing componentWillReceiveProps -> state updates

# 2.0.2

* Drop deprecated `react-addons-update`, use `immutability-helper` instead

# 2.0.2

* add prepublish script to build * forgot to build 2.0.1 last time :)

# 2.0.1

* change extensions to .js

# 2.0.0

* change name to @loopmode/dis-gui
* move source code into /src
* transpile into /lib
* publish /lib
* transpile with babel
