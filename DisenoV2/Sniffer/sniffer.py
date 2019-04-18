import socket
import requests
import json

# UDP Socket configuration
UDP_IP = "localhost"
UDP_PORT = 4001
sock = socket.socket(socket.AF_INET, # Internet
                     socket.SOCK_DGRAM) # UDP
sock.bind((UDP_IP, UDP_PORT))

# HTTP Request configuration
url = 'http://localhost:3000/api/v1/user/addLocation'
headers = {'Content-Type': 'application/json'}


while True:
    data, addr = sock.recvfrom(1024) # buffer size is 1024 bytes
    print (data.decode("utf-8"))
    payload = {
        'truckname': 'Daza1', 
        'lat': 'value2', 
        'lng': 'value2', 
        'date': 'value2', 
        'time': 'value2', 
        'vel': 'value2', 
        'rpm': 'value2'
        }
    r = requests.post(url, headers=headers, data=json.dumps(payload))