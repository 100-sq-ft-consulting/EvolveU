import unittest
from Competency200 import email, calculate_taxes
	
class TestEmail(unittest.TestCase):
    def test_email(self):
        #luis test
        self.assertEqual(email("larry","Schumulich"), "larry.Schumulich@evolveU.ca")

class TestTaxes(unittest.TestCase):
    def test_calculate_taxes(self):
        #luis test2
        self.assertEqual(calculate_taxes(0),0.1)


if __name__ == '__main__':
    unittest.main()
