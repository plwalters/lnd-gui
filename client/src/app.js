export class App {
  configureRouter(config, router) {
    config.title = 'LND Node Information';
    config.map([
      { route: ['', 'node-info'], name: 'node-info', moduleId: 'routes/node-info', nav: true, title: 'LND Node Info' }
    ]);

    this.router = router;
  }
}
