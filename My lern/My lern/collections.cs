using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace my_lern
{
    class collections
    {
        public static void List()
        {
            Console.Clear();
            Console.WriteLine("Создаем List");
            Console.WriteLine("List<int> list = new List<int>();");
            List<int> list = new List<int>();
            Console.WriteLine("Добавляем элементы с помощью метода Add");
            Console.WriteLine("list.Add(2);");
            Console.WriteLine("list.Add(3);");
            Console.WriteLine("list.Add(3);");
            list.Add(2);
            list.Add(3);
            list.Add(3);
            Console.WriteLine("Подсчитываем элементы списка list");
            Console.WriteLine("for (var i = 0;i<list.Count;i++)" +
             "{ " +
                "Console.WriteLine(list[i]);" +
            "}"
            );

            for (var i = 0; i < list.Count; i++)
            {
                Console.WriteLine(list[i]);
            }
            Console.WriteLine("Удаляем элемент списка по индексу" +
            "list.RemoveAt(2);");
            list.RemoveAt(2);
            Console.WriteLine("Подсчитываем элементы списка list");
            Console.WriteLine("for (var i = 0;i<list.Count;i++)" +
             "{ " +
                "Console.WriteLine(list[i]);" +
            "}"
            );
            for (var i = 0; i < list.Count; i++)
            {
                Console.WriteLine(list[i]);
            }
            Console.WriteLine("Удаляем элемен по значению Remove");
            Console.WriteLine("list.Remove(3);");
            list.Remove(3);
            Console.WriteLine("Подсчитываем элементы списка list");
            Console.WriteLine("for (var i = 0;i<list.Count;i++)" +
             "{ " +
                "Console.WriteLine(list[i]);" +
            "}"
            );
            for (var i = 0; i < list.Count; i++)
            {
                Console.WriteLine(list[i]);
            }
            Program.Main();
        }
        public static void LinkedList()
        {
            Console.Clear();
            Console.WriteLine("Создаем объект LinkedList");
            Console.WriteLine("LinkedList<int> linkedList = new LinkedList<int>();");
            LinkedList<int> linkedList = new LinkedList<int>();
            Console.WriteLine("Добавить в конец списка");
            Console.WriteLine("linkedList.AddLast(1);");
            linkedList.AddLast(1);
            Console.WriteLine("Добавить в начало списка");
            Console.WriteLine("linkedList.AddFirst(2);");
            linkedList.AddFirst(2);
            Console.WriteLine("Добавить в после какого-либо эелемента");
            Console.WriteLine("linkedList.AddAfter(linkedList.Last,3);");
            linkedList.AddAfter(linkedList.Last,3);
            Console.WriteLine("Добавить в перед каким-либо элементом");
            Console.WriteLine("linkedList.AddBefore(linkedList.Last, 3);");
            linkedList.AddBefore(linkedList.Last, 3);
            Console.WriteLine("Удалить последний элемент списка");
            Console.WriteLine("linkedList.RemoveLast();");
            linkedList.RemoveLast();
            Console.WriteLine("Удалить первый элемент списка");
            Console.WriteLine("linkedList.RemoveFirst();");
            linkedList.RemoveFirst();
            Console.WriteLine(linkedList.First());
            Console.WriteLine(linkedList.Count());
            Console.WriteLine(linkedList.Last());
            Console.WriteLine(linkedList.Count());
            Program.Main();
        }
        public static void Queue()
        {
            Console.Clear();
            Console.WriteLine("Создаем объект Queue"); 
            Console.WriteLine("Queue<int> queue = new Queue<int>();");
            Queue<int> queue = new Queue<int>();
            Console.WriteLine("Добавление элемента в конец очереди queue.Enqueue(1);");
            Console.WriteLine("queue.Enqueue(1);" +
            "queue.Enqueue(2);"+
            "queue.Enqueue(3);"+
            "queue.Enqueue(4); ");
            queue.Enqueue(1);
            queue.Enqueue(2);
            queue.Enqueue(3);
            queue.Enqueue(4);
            Console.WriteLine("Берем первый элемент из очереди без его удаления queue.Peek();");
            Console.WriteLine(queue.Peek());
            Console.WriteLine("Берем первый элемент из очереди с его последующем удалением из нее queue.Dequeue()");
            Console.WriteLine(queue.Dequeue());
            Console.WriteLine("Повторяем еще 2 раза");
            Console.WriteLine(queue.Dequeue());
            Console.WriteLine(queue.Dequeue());
            Program.Main();
        }
        public static void Stack()
        {
            Console.Clear();
            Console.WriteLine("Создаем объект Stack");
            Console.WriteLine("Stack<int> stack = new Stack<int>(); ");
            Stack<int> stack = new Stack<int>();
            Console.WriteLine("Добавляем элементы в наш стек Push - обавляет эелемент в начало стека");
            Console.WriteLine("stack.Push(1);");
            Console.WriteLine("stack.Push(2);");
            Console.WriteLine("stack.Push(3);");
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);
            Console.WriteLine("Возьмем первый элемент из стека без удаления Peek");
            Console.WriteLine("stack.Peek();");
            Console.WriteLine(stack.Peek());
            Console.WriteLine("Возьмем первый элемент из стека с удаления Pop");
            Console.WriteLine("stack.Pop();");
            Console.WriteLine(stack.Pop());
            Console.WriteLine("Проверим длину стека");
            Console.WriteLine("Stack.Count()");
            Console.WriteLine(stack.Count());
            Console.WriteLine("Возьмем последний элемент стека без удаления Last");
            Console.WriteLine(stack.Last());
            Console.WriteLine("Возьмем первый элемент стека без удаления First");
            Console.WriteLine(stack.First());
            Console.WriteLine("Проверим длину стека");
            Console.WriteLine(stack.Count());
            Program.Main();
        }
        public static void Dictionary()
        {

        }
    }
}
