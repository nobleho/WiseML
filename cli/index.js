#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import readFile, { writeFile} from "./src/datakit/fsutil.js";
import { contentData } from "./data/data.js";

yargs(hideBin(process.argv))
  .command(
    "list",
    "List all commands",
    () => {
      console.info(
        "List commands: \n vurl <url> : Fetch the contents of the URL to view \n list : List all commands \n --help : Help \n --version : Version \n"
      );
    },
    () => {}
  )
  .command(
    "vurl <url>",
    "fetch the contents of the URL to view",
    () => {},
    (args) => {
      console.info(args);
    }
  )
  .command(
    "add <filename>",
    "Add new function",
    () => {},
    (args) => {
      functions(args);
    }
  )
  .command(
    "component <componentname>",
    "Add new component",
    () => {},
    (args) => {
      newComponent(args);
    }
  )
  .command(
    "read <filename>",
    "read JSON",
    () => {},
    (args) => {
      readjson(args);
    }
  )
  .command(
    "scan <projectDir>",
    "read JSON",
    () => {},
    (args) => {
    
    }
  )
  .command(
    "import <projectDir>",
    "read JSON",
    () => {},
    (args) => {
      loadProject(args.projectDir);
    }
  )
  .demandCommand(1)
  .parse();

function functions(args) {
  console.info(args);
}

function readjson(args) {
    console.info(args.filename);
    let obj;

    fs.readFile("./json/" + args.filename, "utf8", function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        console.info(obj);
    });
}

function newComponent(args) {
    console.info(args.componentname);
    let router = args.componentname;
    var data = readFile("./app/html/root.htpl");
    let result = data;
    contentData.forEach((element) => {
        result = result.replaceAll(element.var, element.val);
    });
    console.log(result);
    writeFile("./dist/"+router+".html",result);
}