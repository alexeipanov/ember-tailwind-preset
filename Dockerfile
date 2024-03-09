FROM node:18.19.1-bookworm
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - &&\
 sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'
RUN apt-get update && apt-get install -y exa neovim google-chrome-stable
RUN yarn global add pnpm ember-cli@5.4
EXPOSE 4200 7200
CMD ["/bin/bash"]
