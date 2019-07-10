# Implementando el Patrón <<Config Server>>

The main part of the application is a config class – more specifically a @SpringBootApplication – which pulls in all the required setup through the auto-configure annotation @EnableConfigServer:

	@SpringBootApplication
	@EnableConfigServer
	public class ConfigServer {
	     
	    public static void main(String[] arguments) {
	        SpringApplication.run(ConfigServer.class, arguments);
	    }
	}

Now we need to configure the server port on which our server is listening and a Git-url which provides our version-controlled configuration content. The latter can be used with protocols like http, ssh or a simple file on a local filesystem.

Tip: If you are planning to use multiple config server instances pointing to the same config repository, you can configure the server to clone your repo into a local temporary folder. But be aware of private repositories with two-factor authentication, they are difficult to handle! In such a case, it is easier to clone them on your local filesystem and work with the copy.

There are also some placeholder variables and search patterns for configuring the repository-url available; but this is beyond the scope of our article. If you are interested, the official documentation is a good place to start.

We also need to set a username and a password for the Basic-Authentication in our application.properties to avoid an auto-generated password on every application restart:

	server.port=8888
	spring.cloud.config.server.git.uri=
	spring.cloud.config.server.git.clone-on-start=true

# A Git Repository as Configuration Storage

To complete our server, we have to initialize a Git repository under the configured url, create some new properties files and popularize them with some values.

The name of the configuration file is composed like a normal Spring application.properties, but instead of the word ‘application’ a configured name, e.g. the value of the property ‘spring.application.name’ of the client is used, followed by a dash and the active profile. For example:

$> git init
$> echo 'user.role=Developer' > {application-client-name}-development.properties
$> echo 'user.role=User'      > {application-client-name}-production.properties
$> git add .
$> git commit -m 'Initial config-client properties'
Troubleshooting: If you run into ssh-related authentication issues, double check ~/.ssh/known_hosts and ~/.ssh/authorized_keys on your ssh server!

# Querying the Configuration

Now we’re able to start our server. The Git-backed configuration API provided by our server can be queried using the following paths:

	/{application}/{profile}[/{label}]
	/{application}-{profile}.yml
	/{label}/{application}-{profile}.yml
	/{application}-{profile}.properties
	/{label}/{application}-{profile}.properties

In which the {label} placeholder refers to a Git branch, {application} to the client’s application name and the {profile} to the client’s current active application profile.

So we can retrieve the configuration for our planned config client running under development profile in branch master via:

$> curl http://localhost:8888/{application-name-client}/development/master