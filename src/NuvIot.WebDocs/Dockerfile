FROM microsoft/dotnet:2.2-runtime
WORKDIR /app
COPY ./publish .

ENV ASPNETCORE_URLS http://+:5000
EXPOSE 5000

ENTRYPOINT ["dotnet", "NuvIot.WebDocs.dll"]