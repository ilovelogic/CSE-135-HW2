# CSE-135-HW1
Repo for the CSE 135 first homework web server

## Deflating Content
I checked my site prior to doing anything and noticed Content-Encoding was already gzip. I then recognized that the deflate module was enabled, so perhaps it was default? Regardless, I added the line "AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript application/json" to my virtual host configuration file in case whatever was already set up only worked for a more restrictive number of types.

Since there was no pre-compression version of my website, I am not sure precisely how the encoding affected the content length. That said, a [digital.gov webpage](https://digital.gov/guides/mobile-principles/optimize-minify-compression#:~:text=Issue:%20Large%20page%20files%2C%20which,gzip%20compression%20for%20HTTP%20requests.) notes that "Enabling file compression typically saves around 50 to 70 percent of the file size, and may reduce the size of page resources by up to 90 percent." Accordingly, I suspect that the compression saved me in the range of 50% to 70% in content length.

## Auto Deployment to Web Server
On my server, I created a bare repo clone of my GitHub repo. Then I set up a GitHub workflow (located at .github/workflows/main.yml) that pushes from GitHub to the bare repo. When a push occurs, the post-receive hook script runs, which I editted to write all the pushed changes to my site's public_html directory.

### GitHub Workflow
The Github action has 4 steps. 
 - First, it gets the code from my repo using actions/checkout@v4. 
 - Next, it calls on webfactory/ssh-agent@v0.8.0, which prepares the private SSH key (stored as a repo secret) to use as needed. 
 - Now it adds my server's IP address to known_hosts to avoid the question of whether or not we trust the server. Otherwise, I would receive the errror "Host key verification failed."
 - Then it executes git commands. It defines prod to be the bare repo. Then it performs a git fetch --unshallow and then a git push --force prod main.

## Server Obfuscation
To change the value of the header "Server", I used the security2 module of Apache 2.4. I cded into /etc/modsecurity and saw that there was the file modsecurity.conf-recommended in there. I cped this file to modsecurity.conf. Then I edited modsecurity.conf to add the line 'SecServerSignature "CSE135 Server"' at the bottom of the file. Then I restarted apache2.

I originally attempted using mod_headers, but to no avail. I assume that the Server header is considered one of the more important headers, resulting in its management by the security2 module rather than mod_headers. Either that or I was not attempting the right approaches with the mod_headers. Regardless, what I did with security2 ended up working out!