import colorama,requests,os
os.system("title Bounce Email Valid Checker V1 By ARON-TN")
print('''
    ___    ____  ____  _   __    _______   __
   /   |  / __ \/ __ \/ | / /   /_  __/ | / /   [+] Facebook : fb.com/amyr.gov.tn
  / /| | / /_/ / / / /  |/ /_____/ / /  |/ /   [+] Facebook : fb.com/aron.tn
 / ___ |/ _, _/ /_/ / /|  /_____/ / / /|  /   [+] Telegram : @aron_tn
/_/  |_/_/ |_|\____/_/ |_/     /_/ /_/ |_/   [+] ICQ : @aron_tn
                                             
            [+] Bounce Email Valid Checker V1 
''')
def bounce(i):
 headers = {'user-agent':'Linux Mozilla 5/0','Accept-Encoding':'none'}
 payload = {'emailToValidate':str(i),'actionName':'nc_signup'}
 aa = requests.post('https://www.namecheap.com/Cart/ajax/Validation.ashx', headers=headers, data=payload).json()
 if aa['IsValid']:
  print('[+] ' + str(i) + ' ==> Valid')
  open('valid.txt', 'a').write(i + '\n')
 else:
  print('[-] ' + str(i) + ' ==> Invalid')
  open('Invalid.txt', 'a').write(i + '\n')
mails = open(input('[*] Mail List : '), 'r').read().splitlines()
for i in mails:
 bounce(i)