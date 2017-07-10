import unittest
from DK_work import Apples, Sum, Anagram, Sharpie

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

class TestAnagram(unittest.TestCase):
    def test_anagram_if_true(self):
            anagram = Anagram()
            self.assertTrue(anagram.anagram('das', 'sad'))

    def test_anagram_if_false(self):
            anagram = Anagram()
            self.assertFalse(anagram.anagram('mit', 'tilm'))

class TestSharpie(unittest.TestCase):
    def test_init(self):
        sharp = Sharpie('black', 150)
        self.assertEqual(sharp.ink_amount, 100)
    def test_use(self):
        sharp = Sharpie('black', 150)
        self.assertEqual(sharp.use(), 90)

if __name__ == "__main__":
    unittest.main()
