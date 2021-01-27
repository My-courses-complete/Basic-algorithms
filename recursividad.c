#include <stdio.h>
long result;
int n;

long fact(int n ) {
    if (n == 0)
        return 1;
    return (n*fact(n-1));
};

int main(int argc, char const *argv[])
{
    printf("ingrese un numero a calcular \n");
    scanf("%d", &n);
    if (n < 0)
        printf("el numero debe ser positivo");
    else {
        result = fact(n);
        printf("%d! = %ld\n",n,result);
    }
    return 0;
}
