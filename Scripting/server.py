import socket
import webParser_1

s = socket.socket()         
host = socket.gethostname() 
port = 12345                
s.bind((host, port))        
s.listen(5)                 
while True:
   print 'Got connection from', addr
   c.send('Thank you for connecting')
   c.close()                
