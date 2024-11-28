#include <stdio.h>
#include <windows.h>

int main() {
    HANDLE hReadPipe, hWritePipe;
    SECURITY_ATTRIBUTES sa = { sizeof(SECURITY_ATTRIBUTES), NULL, TRUE };

    // Crear un pipe para la comunicación entre procesos
    if (!CreatePipe(&hReadPipe, &hWritePipe, &sa, 0)) {
        printf("Ocurrió un error al abrir el pipe - canal de comunicación\n");
        return -1;
    }

    // Crear el proceso hijo
    PROCESS_INFORMATION pi;
    STARTUPINFO si = { sizeof(STARTUPINFO) };
    si.hStdInput = GetStdHandle(STD_INPUT_HANDLE);
    si.hStdOutput = hWritePipe; // Configura la salida estándar para escribir en el pipe
    si.dwFlags = STARTF_USESTDHANDLES;

    // Convertir la cadena a un comando que ejecute el proceso hijo
    char command[] = "child.exe";

    if (!CreateProcess(NULL, command, NULL, NULL, TRUE, 0, NULL, NULL, &si, &pi)) {
        printf("Ocurrió un error al crear el proceso hijo\n");
        CloseHandle(hReadPipe);
        CloseHandle(hWritePipe);
        return -1;
    }

    // Cerrar el handle de escritura en el proceso padre
    CloseHandle(hWritePipe);

    // Leer el valor enviado por el proceso hijo desde el pipe
    int y;
    DWORD bytesRead;
    if (ReadFile(hReadPipe, &y, sizeof(int), &bytesRead, NULL)) {
        printf("Valor obtenido del proceso hijo = %d\n", y);
    } else {
        printf("Ocurrió un error al leer del pipe\n");
    }

    // Cerrar el handle de lectura
    CloseHandle(hReadPipe);

    // Esperar a que termine el proceso hijo
    WaitForSingleObject(pi.hProcess, INFINITE);
    CloseHandle(pi.hProcess);
    CloseHandle(pi.hThread);

    return 0;
}
