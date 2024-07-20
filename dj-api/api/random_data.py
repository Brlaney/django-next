# api/random_data.py
from faker import Faker
from .models import Order

fake = Faker()

def generate_random_order():
    return Order(
        id=fake.pydecimal(left_digits=9, right_digits=0, positive=True),
        date=fake.date_this_decade(),
        first_name=fake.first_name(),
        last_name=fake.last_name(),
        city=fake.city(),
        state=fake.state_abbr(),
        card=fake.credit_card_number(card_type='mastercard'),
        company=fake.company(),
        cost=str(fake.pydecimal(left_digits=4, right_digits=2, positive=True)),
        status=fake.random_element(elements=('pending', 'completed', 'shipped'))
    )
