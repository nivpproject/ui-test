@echo off
call webpack
call nb.exe project.json
explorer "test.nivp"
