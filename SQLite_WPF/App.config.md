# I should finish writting in file App.config
```XML
<providers>
		<provider invariantName="System.Data.SQLite"  type="System.Data.SQLite.EF6.SQLiteProviderServices, System.Data.SQLite.EF6"/>
		<provider invariantName="System.Data.SqlClient" type="System.Data.Entity.SqlServer.SqlProviderServices, EntityFramework.SqlServer" />
		<provider invariantName="System.Data.SQLite.EF6" type="System.Data.SQLite.EF6.SQLiteProviderServices, System.Data.SQLite.EF6" />
</providers>
```

### This provider which can connect to you DB. If you don't will have this rows, your DB cannot connect.
```XML
<connectionStrings>
		<add name="DefaultConnection" connectionString="Data Source=.\DB_NAME.db" providerName="System.Data.SQLite" />
</connectionStrings>
```

 This is rows say about DB which you will connect. Where writed DN_NAME you should write your DB name, example: test.db, users.db and any


### All code
``` XML
	<connectionStrings>
		<add name="DefaultConnection" connectionString="Data Source=.\DB_NAME.db" providerName="System.Data.SQLite" />
	</connectionStrings>
	<entityFramework>
		<defaultConnectionFactory type="System.Data.Entity.Infrastructure.LocalDbConnectionFactory, EntityFramework">
			<parameters>
				<parameter value="v11.0" />
			</parameters>
		</defaultConnectionFactory>
		<providers>
			<provider invariantName="System.Data.SQLite"  type="System.Data.SQLite.EF6.SQLiteProviderServices, System.Data.SQLite.EF6"/>
			<provider invariantName="System.Data.SqlClient" type="System.Data.Entity.SqlServer.SqlProviderServices, EntityFramework.SqlServer" />
			<provider invariantName="System.Data.SQLite.EF6" type="System.Data.SQLite.EF6.SQLiteProviderServices, System.Data.SQLite.EF6" />
		</providers>
	</entityFramework>
	<system.data>
		<DbProviderFactories>
			<add name="SQLite Data Provider (Entity Framework 6)" invariant="System.Data.SQLite.EF6" description=".NET Framework Data Provider for SQLite (Entity Framework 6)" type="System.Data.SQLite.EF6.SQLiteProviderFactory, System.Data.SQLite.EF6" />
			<add name="SQLite Data Provider" invariant="System.Data.SQLite" description=".NET Framework Data Provider for SQLite" type="System.Data.SQLite.SQLiteFactory, System.Data.SQLite" />
		</DbProviderFactories>
	</system.data>
```
