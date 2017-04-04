#Teacher Student

#Create Student and Teacher classes
#Student
#learn()
#question(teacher) -> calls the teachers answer method
#Teacher
#teach(student) -> calls the students learn method
#answer()

class Student():
    def learn(self):
        print('OK got it!')

    def question(self, teacher):
        print('Whaaat?')
        teacher.answer()

class Teacher():
    def teach(self, student):
        print('The correct solution is xy.')
        student.learn()

    def answer(self):
        print('Yes, this is the answer.')

teacher1 = Teacher()
student1 = Student()
teacher1.teach(student1)
student1.question(teacher1)
