import { browser, element, by } from 'protractor';
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const defineSupportCode = require('cucumber').defineSupportCode;

Given('application url', function (): void {
    console.log("Executing given step");
   /* browser.get("http://juliemr.github.io/protractor-demo/");
    let title = browser.getTitle();
    console.log(title);
    expect(title).to.eventually.equal("Super Calculator");*/
});

Then('home page of the application should be launched', function () {
    console.log("Executing then step");
   /* element(by.model("first")).sendKeys("3");
   element(by.model("second")).sendKeys("7");
   element(by.id("gobutton")).click();
   expect(element(by.className("ng-binding")).getText()).to.eventually.equal("10");
   console.log(element(by.className("ng-binding")).getText());*/
  });

