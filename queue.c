/* 1- Crear pointer para saber que hay en front y rear */
/* 2- Colocar estos valores en -1 al inicializar */
/* 3- Incrementar en 1 el valor de rear cuando agregamos un elemento  */
/* 4- Retornar el valor de front al quitar un elemento */
/* 5- Incrementar en 1 el valor de front al usar dequeue */
/* 6- Antes de agregar un elemento revisar si hay espacio */
/* 7- Antes de remover un elemento revisar que existan elementos */
/* 8- Asegurarnos de que al remover todos los elementos asignemos -1 a front y rear */

#include<stdio.h>
#define SIZE 5
int values[SIZE], front = -1, rear = -1;

void enQueue(int value) {
    if (rear == SIZE-1)
        printf("Nuestro Queue esta lleno \n");
    else
    {
        if (front == -1)
            front = 0;
        rear++;
        values[rear] = value;     
        printf("Se inserto el valor %d correctamente \n", value);   
    }
}

void deQueue() {
    if (rear == -1)
        printf("Nuestro Queue esta vacio \n");
    else
    {
        printf("se elimino el valor %d \n", values[front]);
        for (int i = 0; i < rear; i++)
        {
            values[i] = values[i+1];
        }
        rear--;
    }
}

void printQueue() {
    printf("[");
    for (int i = 0; i <= rear; i++)
    {
        printf(" %d ", values[i]);
    }
    printf("] \n");
}

int main(int argc, char const *argv[]) {
    enQueue(1);
    enQueue(2);
    enQueue(3);
    enQueue(4);
    enQueue(5);
    printQueue();
    deQueue();
    enQueue(10);
    printQueue();
    return 0;
}
