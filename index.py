first_name = 'Trevor'
surname = 'Kwagala'

name = surname + ' ' + first_name

def greet(name) :
    print(f'Hello {name}')

greet(name)

import random

def pick_random_word():
    fruit = random.choice(['apples', 'grapes', 'bananas', 'oranges', 'mangoes'])
    print(fruit)

pick_random_word()