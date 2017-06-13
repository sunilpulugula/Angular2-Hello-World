import { Component } from "@angular/core";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

//create component
@Component({ selector: "hello", templateUrl: "helloworld.html" })
class SampleComponent
{
	name = "Angular";
}

//create module
@NgModule({ declarations: [ SampleComponent ], imports: [ BrowserModule ],	bootstrap: [ SampleComponent ] })
class MainModule
{

}

//bootstrapModule
platformBrowserDynamic().bootstrapModule(MainModule);