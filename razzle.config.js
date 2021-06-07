module.exports = {
  modify: (config, { target, dev }, webpack) => {
    if (target === "node") {
      config.externals = []    
    }
    if(process.env.NODE_ENV == 'production'){
      config.output.publicPath = '/';
    }
    return config;
  },
};