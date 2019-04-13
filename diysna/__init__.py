from flask import Flask, render_template, flash, request
from flask_graphql import GraphQLView
import graphene
from wtforms.fields.html5 import DateField
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField


class Query(graphene.ObjectType):
    hello = graphene.String(description='A typical hello world')

    def resolve_hello(self, info):
        return 'World'


schema = graphene.Schema(query=Query)

app = Flask(__name__)
app.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'
# app = Flask(__name__,
#            static_folder='./public',
#            template_folder="./static")

app.add_url_rule(
    '/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))


class ReusableForm(Form):
    keyword = TextField('Keyword2:', validators=[validators.required()])
    #location = TextField('Location:', validators=[validators.required()])
    #radius = TextField('Radius:', validators=[validators.required()])
    dt = DateField('Date Picker', format='%Y-%m-%d')
    #number_tweets = TextField('NumberTweets:', validators=[validators.required()])


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/form', methods=['GET', 'POST'])
def form():
    form = ReusableForm(request.form)
    if request.method == 'POST':
        keyword = request.form['keyword']
        dt = request.form['dt']
    if form.validate():
        flash('Hello ' + keyword + ' ' + dt)
    else:
        flash('All the form fields are required. ')
    return render_template('form.html', form=form)


if __name__ == '__main__':
    app.run()
