using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace my_lern
{
    class Program
    {
        public static void Main()
        {
            Console.WriteLine("Введите цифру");
            Console.WriteLine("0 - List" + "\n" + "1 - LinkedList" + "\n" + "2 - Queue(очередь FIFO)" + "\n" + "3 - Stack(стэк LIFO)" + "\n" + "4 - Dictionary(словарь, ключ:значение)");
            string select = Console.ReadLine();
            if (!int.TryParse(select, out var selectInt))
            {
                Main();
            }
            switch (int.Parse(select))
            {
                case 0: collections.List(); break;
                case 1: collections.LinkedList(); break;
                case 2: collections.Queue(); break;
                case 3: collections.Stack(); break;
                case 4: collections.Dictionary(); break;
                default: Main(); break;
            }

            Console.Read();
        }
    }
}