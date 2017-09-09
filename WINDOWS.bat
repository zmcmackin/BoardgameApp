## Setup from fresh pc
# created on Windows 7

#install choco
echo install choco : https://chocolatey.org/install
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

echo installed choco
refreshenv

#install reqs
echo installs yarn, node
choco install yarn

echo reqs needed
choco install mongodb

choco install jdk8

choco install git

git install maven

refreshenv

#libraries not in maven
git clone https://github.com/mapstruct/mapstruct.git

cd mapstruck
mvn clean install
cd ..

