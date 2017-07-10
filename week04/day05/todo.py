import sys

def controller():
    if len(sys.argv) == 1:
           print ("Python Todo application\n=======================\n\nCommand line arguments:\n-l   Lists all the tasks\n-a   Adds a new task\n-r   Removes an task\n-c   Completes an task")
    else:
        controller = sys.argv[1:]
        if controller[0] == '-l':
            listing()
        if controller[0] == '-a':
            add_new()
        if controller[0] == '-r':
            remove()
        if controller[0] == '-c':
            print("o")

def read():
    task_list = open('database.txt', 'r')
    task_list = task_list.readlines()
    task_list = [i.replace('\n','') for i in task_list]
    task_list = [i.split('#') for i in task_list]
    return task_list
    task_list.close

def listing():
    task_list.read()
    if len(task_list) == 0:
        print('No todos for today! :)')
    else:
        for i in range (len(task_list)):
            if task_list[i][0] == '1':
                task_list[i][0] = '[x]'
            else:
                task_list[i][0] = '[ ]'
            print((i+1), '-', (task_list[i][0]), task_list[i][1])

def add_new():
    new_member = open("database.txt", "a")
    new_member.write(('0#' + str(controller[1])+'\n'))
    new_member.close()

listing()
