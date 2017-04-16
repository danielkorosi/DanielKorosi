import unittest
from DK_work import Apples, Sum

class TestApples(unittest.TestCase):
    def test_get_apple(self):
        apple = Apples()
        self.assertEqual(apple.get_apple(), 'apple')

class TestSum(unittest.TestCase):
    def test_sum(self):
        sum_numbers = Sum()
        self.assertEqual(sum_numbers.sum([2, 4, 6]), 12)
    def test_sum_empty_list(self):
        sum_nums = Sum()
        self.assertEqual(sum_nums.sum([]), 0)
    def test_sum_method_one_number(self):
        sum_nums = Sum()
        self.assertEqual(sum_nums.sum([1]), 1)


if __name__ == "__main__":
    unittest.main()
