# 使用官方的Nginx作为父镜像  
FROM nginx:latest  
  
# 设置工作目录为/app  
WORKDIR /app  
  
# 从GitHub克隆你的仓库  
RUN git clone https://github.com/trebleC/MusicBlog.git .  
  
# 将Nginx的配置文件复制到容器的/etc/nginx/目录下  
#COPY nginx.conf /etc/nginx/nginx.conf  
#COPY default.conf /etc/nginx/conf.d/default.conf  
  
# 暴露80端口  
EXPOSE 80  
  
# 设置默认命令为Nginx服务启动命令  
CMD ["nginx", "-g", "daemon off;"]