// algo
// 1. create export obj callbackPrompt
// *callbackPrompt.message = 'text'
// 2. method showPrompt =>
// *.message = 'text'
// *request for user - phone => con/log
// 3. method showDeferredPrompt(showPrompt)
// *after some ms = transferrrd the only arg

const callbackPrompt = {
  message: 'hello, tell me your phone',
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDeferredPrompt(ms) {
    // console.log(this);
    setTimeout(this.showPrompt.bind(this), ms);
  },
};

// callbackPrompt.showPrompt();
callbackPrompt.showDeferredPrompt(5000);

