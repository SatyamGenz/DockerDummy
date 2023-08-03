#FROM ubuntu:latest
#LABEL authors="SJadhav"
#
#ENTRYPOINT ["top", "-b"]

##########################################
#Provide Base Image
FROM python:3.11-alpine

#Working Directory
WORKDIR /app
#
ENV FLASK_APP=main.py
ENV FlASK_ENV=development

COPY ./requirements.txt ./

RUN pip install -r requirements.txt

COPY ./ ./

CMD ["python","main.py"]
