import routes from '@/router/index';

export function routesMap() {
  routes.forEach(route => {
    return {
      // route['path']: route['name']
    };
  });
  // console.log(routes);
}
