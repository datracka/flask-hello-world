from flask import Flask, render_template
from flask_graphql import GraphQLView
import graphene


class Query(graphene.ObjectType):
    hello = graphene.String(description='A typical hello world')

    def resolve_hello(self, info):
        return 'World'


schema = graphene.Schema(query=Query)

app = Flask(__name__,
            static_folder='./public',
            template_folder="./static")

app.add_url_rule(
    '/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))


@app.route('/')
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run()
