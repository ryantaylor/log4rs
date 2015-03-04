var searchIndex = {};
searchIndex['log4rs'] = {"items":[[0,"","log4rs","log4rs is a highly configurable logging framework modeled after Java's\nLogback and log4j libraries."],[5,"init_config","","Initializes the global logger with a log4rs logger configured by `config`."],[5,"init_file","","Initializes the global logger with a log4rs logger."],[0,"toml","","Support for log4rs configuration from TOML files."],[3,"Creator","log4rs::toml","A type that can create appenders."],[3,"ParseErrors","","Errors encountered when parsing a log4rs TOML config."],[3,"Errors","","Errors encountered when deserializing a TOML configuration into a log4rs `Config`."],[3,"Config","","A deserialized TOML log4rs configuration."],[3,"FileAppenderCreator","","An appender creator for the `FileAppender`."],[3,"ConsoleAppenderCreator","","An appender creator for the `ConsoleAppender`."],[4,"Error","","An error returned when deserializing a TOML configuration into a log4rs `Config`."],[13,"AppenderCreation","","An error instantiating appenders.",0],[13,"Config","","An error when creating the log4rs `Config`.",0],[8,"CreateAppender","","A trait implemented by types that can create appenders."],[10,"create_appender","","Creates an appender with the specified config.",1],[11,"default","","",2],[11,"new","","Creates a new `Creator` with no appender mappings.",2],[11,"add_appender","","Adds a mapping from the specified `kind` to the specified appender\ncreator.",2],[11,"fmt","","",3],[11,"fmt","","",3],[11,"description","","",3],[11,"fmt","","",0],[11,"description","","",0],[11,"cause","","",0],[11,"errors","","Returns the list of errors encountered.",4],[11,"fmt","","",4],[11,"description","","",4],[11,"parse","","Creates a log4rs `Config` from the specified TOML config string and `Creator`.",5],[11,"refresh_rate","","Returns the requested refresh rate.",5],[11,"config","","Returns the log4rs `Config`.",5],[11,"create_appender","","",6],[11,"create_appender","","",7],[0,"config","log4rs","log4rs configuration"],[3,"Root","log4rs::config","Configuration for the root logger."],[3,"RootBuilder","","A builder for `Root`s."],[3,"Appender","","Configuration for an appender."],[3,"AppenderBuilder","","A builder for `Appender`s."],[3,"Logger","","Configuration for a logger."],[3,"LoggerBuilder","","A builder for `Logger`s."],[3,"Config","","A log4rs configuration."],[3,"ConfigBuilder","","A builder for `Config`s."],[3,"Errors","","Errors encountered when validating a log4rs `Config`."],[4,"Error","","An error validating a log4rs `Config`."],[13,"DuplicateAppenderName","","Multiple appenders were registered with the same name.",8],[13,"NonexistentAppender","","A reference to a nonexistant appender.",8],[13,"DuplicateLoggerName","","Multiple loggers were registered with the same name.",8],[13,"InvalidLoggerName","","A logger name was invalid.",8],[11,"fmt","","",9],[11,"builder","","Creates a new `RootBuilder` with no appenders and the specified level.",9],[11,"level","","Returns the minimum level of log messages that the root logger will accept.",9],[11,"appenders","","Returns the list of names of appenders that will be attached to the root logger.",9],[11,"fmt","","",10],[11,"appender","","Adds an appender.",10],[11,"appenders","","Adds appenders.",10],[11,"build","","Consumes the `RootBuilder`, returning the `Root`.",10],[11,"fmt","","",11],[11,"builder","","Creates a new `AppenderBuilder` with the specified name and `Append` trait object.",11],[11,"name","","Returns the name of the appender.",11],[11,"appender","","Consumes the `Appender`, returning the `Append` trait object for the appender.",11],[11,"fmt","","",12],[11,"build","","Consumes the `AppenderBuilder`, returning the `Appender`.",12],[11,"fmt","","",13],[11,"builder","","Creates a new `LoggerBuilder` with the specified name and level.",13],[11,"name","","Returns the name of the logger.",13],[11,"level","","Returns the minimum level of log messages that the logger will accept.",13],[11,"appenders","","Returns the list of names of appenders that will be attached to the logger.",13],[11,"additive","","Determines if appenders of parent loggers will also be attached to this logger.",13],[11,"fmt","","",14],[11,"appender","","Adds an appender.",14],[11,"appenders","","Adds appenders.",14],[11,"additive","","Sets the additivity of the logger.",14],[11,"build","","Consumes the `LoggerBuilder`, returning the `Logger`.",14],[11,"fmt","","",15],[11,"builder","","Creates a new `ConfigBuilder` with the specified `Root`.",15],[11,"appenders","","Returns the `Appender`s associated with the `Config`.",15],[11,"root","","Returns the `Root` associated with the `Config`.",15],[11,"loggers","","Returns the `Logger`s associated with the `Config`.",15],[11,"appender","","Adds an appender.",16],[11,"appenders","","Adds appenders.",16],[11,"logger","","Adds a logger.",16],[11,"loggers","","Adds loggers.",16],[11,"build_lossy","","Consumes the `ConfigBuilder`, returning the `Config`.",16],[11,"build","","Consumes the `ConfigBuilder`, returning the `Config`.",16],[11,"fmt","","",17],[11,"errors","","Returns a slice of `Error`s.",17],[11,"fmt","","",17],[11,"description","","",17],[11,"fmt","","",8],[11,"fmt","","",8],[11,"description","","",8],[0,"appender","log4rs","A set of common appenders"],[3,"FileAppender","log4rs::appender","An appender which logs to a file."],[3,"FileAppenderBuilder","","A builder for `FileAppender`s."],[3,"ConsoleAppender","","An appender which logs to stdout."],[3,"ConsoleAppenderBuilder","","A builder for `ConsoleAppender`s."],[11,"append","","",18],[11,"builder","","Creates a new `FileAppender` builder for an appender which will log to\na file at the provided path.",18],[11,"pattern","","Sets the output pattern for the `FileAppender`.",19],[11,"build","","Consumes the `FileAppenderBuilder`, producing a `FileAppender`.",19],[11,"append","","",20],[11,"builder","","Creates a new `ConsoleAppender` builder.",20],[11,"pattern","","Sets the output pattern for the `ConsoleAppender`.",21],[11,"build","","Consumes the `ConsoleAppenderBuilder`, producing a `ConsoleAppender`.",21],[0,"pattern","log4rs","Simple pattern syntax for appender output formats."],[3,"Error","log4rs::pattern","An error parsing a `PatternLayout` pattern."],[3,"PatternLayout","","A formatter object for `LogRecord`s."],[11,"fmt","","",22],[11,"fmt","","",22],[11,"description","","",22],[11,"fmt","","",23],[11,"default","","Returns a `PatternLayout` using the default pattern of `%d %l %M - %m`.",23],[11,"new","","Creates a `PatternLayout` from a pattern string.",23],[11,"append","","Writes the specified `LogRecord` to the specified `Write`r according\nto its pattern.",23],[8,"Append","log4rs","A trait implemented by log4rs appenders."],[10,"append","","Processes the provided `LogRecord`.",24]],"paths":[[4,"Error"],[8,"CreateAppender"],[3,"Creator"],[3,"ParseErrors"],[3,"Errors"],[3,"Config"],[3,"FileAppenderCreator"],[3,"ConsoleAppenderCreator"],[4,"Error"],[3,"Root"],[3,"RootBuilder"],[3,"Appender"],[3,"AppenderBuilder"],[3,"Logger"],[3,"LoggerBuilder"],[3,"Config"],[3,"ConfigBuilder"],[3,"Errors"],[3,"FileAppender"],[3,"FileAppenderBuilder"],[3,"ConsoleAppender"],[3,"ConsoleAppenderBuilder"],[3,"Error"],[3,"PatternLayout"],[8,"Append"]]};
initSearch(searchIndex);