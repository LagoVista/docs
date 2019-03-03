FROM microsoft/aspnetcore:1.1 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:1.1 AS build
WORKDIR /src
COPY ["NuvIot.WebDocs/NuvIot.WebDocs.csproj", "NuvIot.WebDocs/"]
RUN dotnet restore "NuvIot.WebDocs/NuvIot.WebDocs.csproj"
COPY . .
WORKDIR "/src/NuvIot.WebDocs"
RUN dotnet build "NuvIot.WebDocs.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "NuvIot.WebDocs.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "NuvIot.WebDocs.dll"]