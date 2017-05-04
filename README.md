# Project -> Enigma

# Description :

A program that allows the user to code letters in the same way that the Enigma Machine does it. Using letters as inputs, three rotors, a reflector and letter as output.
  
# How it works :

To code a message using this web app, you need to give it an enconding key. This key has to be in the following format :

 - (R1,G,+0) (R2,D,+0) (R3,G,+0)
 - Where G = left
 - And D = right

The way this key works is pretty simple, every set of parenthesis represents a rotor. Let's concentrate on the first one : (R1,G,+0). This means that the rotor 1 (R1) will rotate to the left (G), finally, (+0) means that it will simply rotate by one space. If we had (+1) it would mean that the rotor would need to rotate by one more space.

Once the key is valid, press 'Sumbit Encoding Key' then you're set.

All you need to do now is to type you message and your secret message will appear at the bottom. To decode it, you just need to set the machine with the same encoding key you used when encoding, then type the coded message to retreive the original message.

# Goal behind the app :
  
This was a class assignment we had to do. We were free to use whichever language we wanted to use, and I chose Javascript along side some HTML and CSS. This was back in my third semester and therefore, the whole thing is far from being otpimized, but it works. Looking back, it could be improved quite a bit, but for the time, it was pretty good.
 
# Developer : 
Yann Morin-Charbonneau @yannmc
