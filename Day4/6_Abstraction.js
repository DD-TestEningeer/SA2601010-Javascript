class Browser {
  openBrowser() {
    console.log("Browser opened....");
   
  }
}

class Chrome extends Browser{

    openChrome(){

        console.log();
    }
}


let browserObj = new Browser();
browserObj.openBrowser();


let chromeObj = new Chrome();

chromeObj.openBrowser();

