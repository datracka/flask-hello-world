from diysna import app

# Load this config object for development mode
app.config.from_object('config.DevelopmentConfig')
app.run()
