# Stage 1: Build the application
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Stage 2: Run the application
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
# Copy the specific jar file.
# The previous error "Unable to access jarfile app.jar" usually means the COPY failed silently or copied nothing/wrong thing.
# Let's try to be very specific again, but also ensure we are copying to the right place.
COPY --from=build /app/target/POS-system-backend-0.0.1-SNAPSHOT.jar /app/app.jar
EXPOSE 5000
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
