# Stage 1 — Build the application using Maven
FROM maven:3.9.0-eclipse-temurin-17 AS builder

# Set working directory inside container
WORKDIR /app

# Copy the pom.xml first to leverage Docker cache for dependencies
COPY pom.xml .

# Download dependencies (without building the app yet)
RUN mvn dependency:go-offline -B

# Copy the rest of the source code
COPY src ./src

# Build the Spring Boot jar (skip tests for faster build)
RUN mvn clean package -DskipTests

# Stage 2 — Create a minimal runtime image
FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the jar built in Stage 1
COPY --from=builder /app/target/demo-0.0.1-SNAPSHOT.jar app.jar

# Expose port that Spring Boot will run on
EXPOSE 8080

# Command to run the jar
CMD ["java", "-jar", "app.jar"]
 