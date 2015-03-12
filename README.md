# Stacker shelljs Plugin

Wrapper for [shelljs](https://github.com/arturadib/shelljs).

Use this plugin instead of shelljs directly to support future async support
as well as global namespace issues.


### Usage:

```coffeescript
# In stacker task file

require 'stacker-shelljs/global'

# Example shelljs commands
ls '*.md'
(cat '*.md').to 'docs.md'
```
