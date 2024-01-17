first_name = input(f"What's your first name: ").title()
surname = input(f"What's your surname: ").title()

def render_name():
    name = surname + ' ' + first_name  
    return name

name = render_name()

def greet(name) :
    print(f'Hello {name} 😊')

greet(name)

