FROM python:3.11

WORKDIR /app

RUN pip install --no-cache-dir poetry

COPY main.py pyproject.toml poetry.lock* ./
RUN poetry install --no-root --no-interaction

EXPOSE 8000

CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]